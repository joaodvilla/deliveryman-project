import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from "../../../database/prismaClient";

// receber username e password
// verificar se o cliente existe
// verificar se a senha está correta
// gerar token


interface IToken {
  token: string;
}
interface IAuthenticateClient {
  username: string;
  password: string;
};

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient): Promise<IToken> {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) {
      throw new Error('Invalid username or password');
    }

    const passwordIsValid = await bcrypt.compare(password, client.password);

    if (!passwordIsValid) {
      throw new Error('Invalid username or password');
    }

    const token = sign({username}, process.env.SECRET_KEY as string, {
      subject: client.id,
      expiresIn: '1d',
    });

    return { token };
  }
}