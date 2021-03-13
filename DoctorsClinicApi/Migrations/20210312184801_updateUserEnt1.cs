using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorsClinicApi.Migrations
{
    public partial class updateUserEnt1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "brithday",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "email",
                table: "Users",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "gender",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "phone",
                table: "Users",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "brithday",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "gender",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "phone",
                table: "Users");
        }
    }
}
