namespace DreamedHouse.Models;

public partial class DoorType
{
	public int DoorTypeId { get; set; }

	public string Name { get; set; } = null!;

	public double Price { get; set; }

	public DateTime CreatedAt { get; set; }

	public DateTime UpdatedAt { get; set; }
}
