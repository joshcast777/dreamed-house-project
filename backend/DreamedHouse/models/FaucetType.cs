namespace DreamedHouse.Models;

public partial class FaucetType
{
	public int FaucetTypeId { get; set; }

	public string Name { get; set; } = null!;

	public double Price { get; set; }

	public DateTime CreatedAt { get; set; }

	public DateTime UpdatedAt { get; set; }
}
