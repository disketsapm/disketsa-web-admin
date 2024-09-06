import { userSchema } from "@/app/(modules)/users/_utils/user.zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient().$extends({
  query: {
    user: {
      create({ args, query }) {
        args.data = userSchema.parse(args.data);
        return query(args);
      },
      update({ args, query }) {
        args.data = userSchema.partial().parse(args.data);
        return query(args);
      },
      updateMany({ args, query }) {
        args.data = userSchema.array().parse(args.data);
        return query(args);
      },
      upsert({ args, query }) {
        args.create = userSchema.parse(args.create);
        args.update = userSchema.partial().parse(args.update);
        return query(args);
      },
    },
  },
});

export default prisma;
