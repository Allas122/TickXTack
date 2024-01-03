-- CreateTable
CREATE TABLE "AuthCodes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "AuthCodes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuthCodes" ADD CONSTRAINT "AuthCodes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
