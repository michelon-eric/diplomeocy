﻿using Diplomacy;

using Orders = System.Collections.Generic.List<Diplomacy.Order>;

Console.WriteLine("meow");

Game game = new();
game.StartGame();

Player germany = game.Players[1];
Player russia = game.Players[game.Players.Count - 1];
List<Player> players = new() { germany, russia };

Action debug = () => {
	players.ForEach(player => {
		Console.WriteLine($"--{player.Countries[0].Name}: Units--");
		player.Units.ForEach(u => Console.WriteLine(u));
		Console.WriteLine($"--{player.Countries[0].Name}: Orders--");
		player.Orders.ForEach(o => Console.WriteLine(o));
		Console.WriteLine();
	});
	Console.WriteLine();
};


germany.Orders.AddRange(new Orders  {
	new MoveOrder {
		Unit = germany.Unit(Territories.Berlin),
		Target = game.Board.Territory(Territories.Prussia),
	},
	new MoveOrder {
		Unit = germany.Unit(Territories.Munich),
		Target = game.Board.Territory(Territories.Silesia),
	}
});
russia.Orders.AddRange(new Orders {
	new MoveOrder {
		Unit = russia.Unit(Territories.Warsaw),
		Target = game.Board.Territory(Territories.Prussia),
	},
	new MoveOrder {
		Unit = russia.Unit(Territories.Moscow),
		Target = game.Board.Territory(Territories.Livonia),
	}
});

debug();
game.ResolveOrderResolutionPhase();
debug();

Order order = new MoveOrder {
	Unit = germany.Unit(Territories.Berlin),
	Target = game.Board.Territory(Territories.Prussia),
};
germany.Orders.AddRange(new Orders {
	order,
	new SupportOrder {
		Unit = germany.Unit(Territories.Silesia),
		SupportedOrder = order,
	}
});
order = new MoveOrder {
	Unit = russia.Unit(Territories.Warsaw),
	Target = game.Board.Territory(Territories.Prussia),
};
russia.Orders.AddRange(new Orders {
	order,
	new SupportOrder {
		Unit = russia.Unit(Territories.Livonia),
		SupportedOrder = order,
	}
});

debug();
game.ResolveOrderResolutionPhase();
debug();