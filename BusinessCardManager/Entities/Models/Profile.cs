using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessCardManager.Entities.Models
{
  public class Profile
  {
    public Profile()
    {
      BusinessCards = new List<BusinessCard>();
    }

    public int Id { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string Login { get; set; }

    public Secret Secret { get; set; }

    public DateTimeOffset RegisterDateTime { get; set; } = DateTimeOffset.Now;

    public List<BusinessCard> BusinessCards { get; set; }
  }
}
