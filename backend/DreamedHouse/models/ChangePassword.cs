namespace DreamedHouse.Models
{
	public class ChangePassword
	{
		public string NewPassword { get; set; } = null!;
		public User User { get; set; } = null!;
	}
}