namespace DreamedHouse.Models;

public partial class House
{
	public int BathroomsNumber { get; set; }

	public DateTime CreatedAt { get; set; }

	public int FloorsNumber { get; set; }

	public int HouseId { get; set; }

	public virtual ICollection<HouseImage> HouseImages { get; } = new List<HouseImage>();

	public string Name { get; set; } = null!;

	public double Price { get; set; }

	public int RoomsNumber { get; set; }

	public int SquareMeters { get; set; }

	public DateTime UpdatedAt { get; set; }
}
