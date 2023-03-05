namespace DreamedHouse.Models;

public partial class FloorType
{
	public int FloorTypeId { get; set; }

	public string Name { get; set; } = null!;

	public double Price { get; set; }

	public DateTime CreatedAt { get; set; }

	public DateTime UpdatedAt { get; set; }
}
