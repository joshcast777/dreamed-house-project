namespace DreamedHouse.models;

public partial class House
{
	public int HouseId { get; set; }

	public string Name { get; set; } = null!;

	public int SquareMeters { get; set; }

	public int RoomsNumber { get; set; }

	public int FloorsNumber { get; set; }

	public int BathroomsNumber { get; set; }

	public double Price { get; set; }

	public DateTime CreatedAt { get; set; }

	public DateTime UpdatedAt { get; set; }

	public virtual ICollection<HouseImage> HouseImages { get; } = new List<HouseImage>();
}
