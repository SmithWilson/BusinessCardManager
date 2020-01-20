using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessCardManager.Migrations
{
    public partial class AddedPhone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "BusinessCards",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Phone",
                table: "BusinessCards");
        }
    }
}
