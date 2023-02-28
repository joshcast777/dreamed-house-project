using DreamedHouse.Models;
using Microsoft.EntityFrameworkCore;

namespace DreamedHouse.Data;

public partial class AppDbContext : DbContext
{
	public virtual DbSet<House> Houses { get; set; } = null!;

	public virtual DbSet<HouseFinish> HouseFinishes { get; set; } = null!;

	public virtual DbSet<HouseImage> HouseImages { get; set; } = null!;

	public virtual DbSet<Role> Roles { get; set; } = null!;

	public virtual DbSet<User> Users { get; set; } = null!;

	public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder
			.UseCollation("utf8_general_ci")
			.HasCharSet("utf8");

		modelBuilder.Entity<House>(entity =>
		{
			entity.HasKey(house => house.HouseId)
				.HasName("PRIMARY");

			entity.ToTable("houses");

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

			entity.Property(house => house.HouseId)
				.HasColumnType("int(11)")
				.HasColumnName("house_id");

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

		modelBuilder.Entity<HouseFinish>(entity =>
		{
			entity.HasKey(houseFinish => houseFinish.HouseFinisheId)
				.HasName("PRIMARY");

			entity.ToTable("house_finishes");

			entity.Property(houseFinish => houseFinish.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(houseFinish => houseFinish.HouseFinisheId)
				.HasColumnType("int(11)")
				.HasColumnName("house_finishe_id");

			entity.Property(houseFinish => houseFinish.Name)
				.HasMaxLength(100)
				.HasColumnName("name");

			entity.Property(houseFinish => houseFinish.Price)
				.HasColumnType("double(10,2)")
				.HasColumnName("price");

			entity.Property(houseFinish => houseFinish.TypeFinish)
				.HasMaxLength(30)
				.HasColumnName("type_finish");

			entity.Property(houseFinish => houseFinish.UpdatedAt)
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

			entity.Property(houseImage => houseImage.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.HasOne(houseImage => houseImage.House)
				.WithMany(house => house.HouseImages)
				.HasForeignKey(houseImage => houseImage.HouseId)
				.HasConstraintName("fk_house_images_houses");

			entity.Property(houseImage => houseImage.HouseId)
				.HasColumnType("int(11)")
				.HasColumnName("house_id");

			entity.Property(houseImage => houseImage.ImageId)
				.HasColumnType("int(11)")
				.HasColumnName("image_id");

			entity.Property(houseImage => houseImage.ImageUrl)
				.HasMaxLength(255)
				.HasColumnName("image_url");

			entity.Property(houseImage => houseImage.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");
		});

		modelBuilder.Entity<Role>(entity =>
		{
			entity.HasKey(role => role.RoleId)
				.HasName("PRIMARY");

			entity.ToTable("roles");

			entity.Property(role => role.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(role => role.Name)
				.HasMaxLength(100)
				.HasColumnName("name");

			entity.Property(role => role.RoleId)
				.HasColumnType("int(11)")
				.HasColumnName("role_id");

			entity.Property(role => role.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");
		});

		modelBuilder.Entity<User>(entity =>
		{
			entity.HasKey(user => user.UserId)
				.HasName("PRIMARY");

			entity.ToTable("users");

			entity.HasIndex(user => user.Dni, "dni")
				.IsUnique();

			entity.HasIndex(user => user.Email, "email")
				.IsUnique();

			entity.HasIndex(user => user.PhoneNumber, "phone_number")
				.IsUnique();

			entity.Property(user => user.CreatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("created_at");

			entity.Property(user => user.Dni)
				.HasMaxLength(10)
				.HasColumnName("dni");

			entity.Property(user => user.Email)
				.HasMaxLength(50)
				.HasColumnName("email");

			entity.Property(user => user.FirstName)
				.HasMaxLength(150)
				.HasColumnName("first_name");

			entity.Property(user => user.LastName)
				.HasMaxLength(150)
				.HasColumnName("last_name");

			entity.Property(user => user.Password)
				.HasMaxLength(60)
				.HasColumnName("password");

			entity.Property(user => user.PhoneNumber)
				.HasMaxLength(10)
				.HasColumnName("phone_number");

			entity.Property(user => user.RoleId)
				.HasColumnType("int(11)")
				.HasColumnName("role_id");

			entity.Property(user => user.UpdatedAt)
				.HasDefaultValueSql("CURRENT_TIMESTAMP")
				.HasColumnType("timestamp")
				.HasColumnName("updated_at");

			entity.Property(user => user.UserId)
				.HasColumnType("int(11)")
				.HasColumnName("user_id");
		});

		OnModelCreatingPartial(modelBuilder);
	}

	partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
