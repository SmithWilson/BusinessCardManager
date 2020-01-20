using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessCardManager.Entities.Models
{
  public class BusinessCard
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Adress { get; set; }
    public string Company { get; set; }
    public string Phone { get; set; }
    public string BusinessCardUrl { get; set; }

    public int ProfileId { get; set; }
    public Profile Profile { get; set; }
  }
}
