import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from "../../../database/prismaClient";

interface IToken {
  token: string;
}
interface IAuthenticateDeliveryman {
  username: string;
  password: string;
};

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman): Promise<IToken> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });

    if (!deliveryman) {
      throw new Error('Invalid username or password');
    }

    const passwordIsValid = await bcrypt.compare(password, deliveryman.password);

    if (!passwordIsValid) {
      throw new Error('Invalid username or password');
    }

    const token = sign({username}, process.env.SECRET_KEY as string, {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return { token };
  }
}