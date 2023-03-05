namespace DreamedHouse.Models;

public partial class HouseImage
{
	public int ImageId { get; set; }

	public string ImageUrl { get; set; } = null!;

	public DateTime CreatedAt { get; set; }

	public DateTime UpdatedAt { get; set; }

	public int HouseId { get; set; }

	public virtual House House { get; set; } = null!;
}
