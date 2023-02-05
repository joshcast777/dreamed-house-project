using DreamedHouse.models;
using Microsoft.EntityFrameworkCore;

namespace DreamedHouse.data;

public partial class AppDbContext : DbContext
{
	public virtual DbSet<House> Houses { get; set; }

	public virtual DbSet<HouseImage> HouseImages { get; set; }

	public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder
			.UseCollation("utf8_general_ci")
			.HasCharSet("utf8");

		modelBuilder.Entity<House>(entity =>
		{
			entity.HasKey(e => e.HouseId)
                .HasName("PRIMARY");

			entity.ToTable("houses");

			entity.Property(house => house.HouseId)
				.HasColumnType("int(11)")
				.HasColumnName("house_id");

			entity.Property(house => house.BathroomsNumber)
				.HasColumnType("int(11)")
				.HasColumnName("bathrooms_number");

			entity.Property(house => house.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(house => house.FloorsNumber)
				.HasColumnType("int(11)")
				.HasColumnName("floors_number");

			entity.Property(house => house.Name)
				.HasMaxLength(100)
				.HasColumnName("name");

			entity.Property(house => house.Price)
				.HasColumnType("double(10,2)")
				.HasColumnName("price");

			entity.Property(house => house.RoomsNumber)
				.HasColumnType("int(11)")
				.HasColumnName("rooms_number");

			entity.Property(house => house.SquareMeters)
				.HasColumnType("int(11)")
				.HasColumnName("square_meters");

			entity.Property(house => house.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");
		});

		modelBuilder.Entity<HouseImage>(entity =>
		{
			entity.HasKey(houseImage => houseImage.ImageId)
				.HasName("PRIMARY");

			entity.ToTable("house_images");

			entity.HasIndex(houseImage => houseImage.HouseId, "fk_house_images_houses");

			entity.Property(houseImage => houseImage.ImageId)
				.HasColumnType("int(11)")
				.HasColumnName("image_id");

			entity.Property(houseImage => houseImage.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(houseImage => houseImage.HouseId)
				.HasColumnType("int(11)")
				.HasColumnName("house_id");

			entity.Property(houseImage => houseImage.ImageUrl)
				.HasMaxLength(255)
				.HasColumnName("image_url");

			entity.Property(houseImage => houseImage.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");

			entity.HasOne(houseImage => houseImage.House)
                .WithMany(house => house.HouseImages)
				.HasForeignKey(houseImage => houseImage.HouseId)
				.HasConstraintName("fk_house_images_houses");
		});

		OnModelCreatingPartial(modelBuilder);
	}

	partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
