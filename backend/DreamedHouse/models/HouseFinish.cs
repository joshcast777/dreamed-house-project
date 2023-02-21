﻿namespace DreamedHouse.Models;

public partial class HouseFinish
{
	public DateTime CreatedAt { get; set; }

	public int HouseFinisheId { get; set; }

	public string Name { get; set; } = null!;

	public double Price { get; set; }

	public string TypeFinish { get; set; } = null!;

	public DateTime UpdatedAt { get; set; }
}