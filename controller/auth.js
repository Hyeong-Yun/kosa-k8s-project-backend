// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../data/auth.js';

// TODO: Make it secure!
// const jwtSecretKey = 'F2dN7x8HVzBWaQuEEDnhsvHXRWqAR63z';
// const jwtExpiresInDays = '2d';
// const bcryptSaltRounds = 12;

export async function signup(req, res) {
  const { username, password, email, phoneNumber, birthNumber, birthDate } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  
  userRepository.createUser({
    username,
    password,
    email,
    phoneNumber,
    birthNumber,
    birthDate
  });
  
//   const token = createJwtToken(userId);
   res.status(201).json({ username });
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  if(user.username === username && user.password === password){
    res.status(200).json({ username : user.username, email : user.email });
  }

}
//   const isValidPassword = await bcrypt.compare(password, user.password);
//   if (!isValidPassword) {
//     return res.status(401).json({ message: 'Invalid user or password' });
//   }

//   const token = createJwtToken(user.id);
//   res.status(200).json({ token, username });

// function createJwtToken(id) {
//   return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
// }

// export async function me(req, res, next) {
//   const user = await userRepository.findById(req.userId);
//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }
   

