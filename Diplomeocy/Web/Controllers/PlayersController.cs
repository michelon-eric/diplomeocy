﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

using Web;
using Web.Models;
using Web.Utils;

namespace Web.Controllers {
	public class PlayersController : Controller {
		private readonly DatabaseContext context;

		public PlayersController(DatabaseContext context) {
			this.context = context;
		}

		// GET: Players
		public async Task<IActionResult> Index() {
			return context.Players != null ?
						View(await context.Players.ToListAsync()) :
						Problem("Entity set 'DatabaseContext.Players'  is null.");
		}

		// GET: Players/Details/5
		public async Task<IActionResult> Details(int? id) {
			if (id == null || context.Players == null) {
				return NotFound();
			}

			var players = await context.Players
				.FirstOrDefaultAsync(m => m.Id == id);
			if (players == null) {
				return NotFound();
			}

			return View(players);
		}
		// GET: StartGame
		public async Task<IActionResult> StartGame(int? id) {
			if (id == null || context.Players == null) {
				return NotFound();
			}

			var players = await context.Players
				.FirstOrDefaultAsync(m => m.IdTable == id);
			if (players == null) {
				return NotFound();
			}

			return View(players);
		}
		// GET: Players/Create
		public IActionResult Create() {
			return base.View(new UserPlayer {
				Id = new Random(Guid.NewGuid().GetHashCode()).Next(100000, 999999 + 1),
				IdTable = new Random(Guid.NewGuid().GetHashCode()).Next(100000, 999999 + 1),
				User = HttpContext.Session.Get<User>("User")?.Id // Get<User> returns User? so it could be null (if there's no "User" key stored it returns null)
					?? throw new Exception("you can only create a table when logged so go log in you dumbass")
			});
		}

		// POST: Players/Create
		// To protect from overposting attacks, enable the specific properties you want to bind to.
		// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPost]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Create([Bind("Id,IdTable,IdUser")] Player players) {
			int? userId = HttpContext.Session.Get<User>("User")?.Id;
			if (userId is null) return NotFound();
			if (context.Players.AnyAsync(m => m.IdUser == userId && m.IdTable == players.IdTable).Result)
				return players is null ? this.JsonNotFound("players") : this.JsonRedirect(Url.Action("StartGame", new { players.IdTable })!);

			if (ModelState.IsValid) {
				context.Add(new Models.Player {
					IdTable = players.IdTable,
					IdUser = (int)userId,
				});
				await context.SaveChangesAsync();
				return this.JsonRedirect(Url.Action("StartGame", new { players.IdTable })!);
			}
			return View(players);
		}

		// GET: Players/Edit/5
		public async Task<IActionResult> Edit(int? id) {
			if (id == null || context.Players == null) {
				return NotFound();
			}

			var players = await context.Players.FindAsync(id);
			if (players == null) {
				return NotFound();
			}
			return View(players);
		}

		// POST: Players/Edit/5
		// To protect from overposting attacks, enable the specific properties you want to bind to.
		// For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
		[HttpPost]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> Edit(int id, [Bind("Id,IdTable,IdUser")] Player players) {
			if (id != players.Id) {
				return NotFound();
			}

			if (ModelState.IsValid) {
				try {
					context.Update(players);
					await context.SaveChangesAsync();
				} catch (DbUpdateConcurrencyException) {
					if (!PlayersExists(players.Id)) {
						return NotFound();
					} else {
						throw;
					}
				}
				return RedirectToAction(nameof(Index));
			}
			return View(players);
		}

		// GET: Players/Delete/5
		public async Task<IActionResult> Delete(int? id) {
			if (id == null || context.Players == null) {
				return NotFound();
			}

			var players = await context.Players
				.FirstOrDefaultAsync(m => m.Id == id);
			if (players == null) {
				return NotFound();
			}

			return View(players);
		}

		// POST: Players/Delete/5
		[HttpPost, ActionName("Delete")]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> DeleteConfirmed(int id) {
			if (context.Players == null) {
				return Problem("Entity set 'DatabaseContext.Players'  is null.");
			}
			var players = await context.Players.FindAsync(id);
			if (players != null) {
				context.Players.Remove(players);
			}

			await context.SaveChangesAsync();
			return RedirectToAction(nameof(Index));
		}

		private bool PlayersExists(int id) {
			return (context.Players?.Any(e => e.Id == id)).GetValueOrDefault();
		}
	}
}
