namespace DreamedHouse.Models;

public partial class HouseImage
{
	public DateTime CreatedAt { get; set; }

	public virtual House House { get; set; } = null!;

	public int HouseId { get; set; }

	public int ImageId { get; set; }

	public string ImageUrl { get; set; } = null!;

	public DateTime UpdatedAt { get; set; }
}
