namespace DreamedHouse.Models;

public partial class User
{
	public DateTime CreatedAt { get; set; }

	public string Dni { get; set; } = null!;

	public string Email { get; set; } = null!;

	public string FirstName { get; set; } = null!;

	public string LastName { get; set; } = null!;

	public string Password { get; set; } = null!;

	public string PhoneNumber { get; set; } = null!;

	public int RoleId { get; set; }

	public DateTime UpdatedAt { get; set; }

	public int UserId { get; set; }
}
