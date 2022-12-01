import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1669915821646 implements MigrationInterface {
    name = 'createTables1669915821646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Client" DROP CONSTRAINT "FK_79f9e2628ab44c22356eaf9be01"`);
        await queryRunner.query(`ALTER TABLE "Client" DROP COLUMN "contactsId"`);
        await queryRunner.query(`ALTER TABLE "Contact" ADD "clientId" uuid`);
        await queryRunner.query(`ALTER TABLE "Contact" ADD CONSTRAINT "FK_5fd03e19b188ee73637086b3657" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contact" DROP CONSTRAINT "FK_5fd03e19b188ee73637086b3657"`);
        await queryRunner.query(`ALTER TABLE "Contact" DROP COLUMN "clientId"`);
        await queryRunner.query(`ALTER TABLE "Client" ADD "contactsId" uuid`);
        await queryRunner.query(`ALTER TABLE "Client" ADD CONSTRAINT "FK_79f9e2628ab44c22356eaf9be01" FOREIGN KEY ("contactsId") REFERENCES "Contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
