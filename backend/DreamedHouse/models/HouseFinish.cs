namespace DreamedHouse.Models;

public partial class HouseFinish
{
	public int HouseFinisheId { get; set; }

	public string Name { get; set; } = null!;

	public double Price { get; set; }

	public string TypeFinish { get; set; } = null!;

	public DateTime CreatedAt { get; set; }

	public DateTime UpdatedAt { get; set; }
}
