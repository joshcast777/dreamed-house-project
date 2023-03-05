namespace DreamedHouse.Models;

public partial class Proforma
{
	public int ProformaId { get; set; }

	public int UserId { get; set; }

	public int HouseId { get; set; }

	public int FloorTypeId { get; set; }

	public int DoorTypeId { get; set; }

	public int FaucetTypeId { get; set; }

	public DateTime CreatedAt { get; set; }

	public DateTime UpdatedAt { get; set; }

	public virtual DoorType? DoorType { get; set; } = null!;

	public virtual FaucetType? FaucetType { get; set; } = null!;

	public virtual FloorType? FloorType { get; set; } = null!;

	public virtual House? House { get; set; } = null!;

	public virtual User? User { get; set; } = null!;
}
