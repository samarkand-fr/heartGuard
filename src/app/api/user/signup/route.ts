import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'; // To hash the password
import { connectDB } from '../../../../utils/db';
import User from '../../../../migration/models/User';

connectDB(); // Ensure DB connection

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // Check if the user already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    return NextResponse.json({ message: 'Username already exists' }, { status: 400 });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save the new user
  const newUser = new User({
    username,
    password: hashedPassword,
  });

  await newUser.save();

  return NextResponse.json({ message: 'Signup successful' }, { status: 201 });
}
