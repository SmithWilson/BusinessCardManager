using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessCardManager.Entities.Models;

namespace BusinessCardManager.Entities
{
  public class SlqLiteContext : DbContext
  {
    protected override void OnConfiguring(DbContextOptionsBuilder options)
           => options.UseSqlite("Data Source=BusinessCard.db");

    public DbSet<Profile> Profiles { get; set; }
    public DbSet<Secret> Secrets { get; set; }
    public DbSet<BusinessCard> BusinessCards { get; set; }
  }
}
