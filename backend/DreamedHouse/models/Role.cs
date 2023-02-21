namespace DreamedHouse.Models;

public partial class Role
{
	public DateTime CreatedAt { get; set; }

	public string Name { get; set; } = null!;

	public int RoleId { get; set; }

	public DateTime UpdatedAt { get; set; }
}