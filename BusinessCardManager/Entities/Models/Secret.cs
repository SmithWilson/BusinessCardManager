using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessCardManager.Entities.Models
{
  public class Secret
  {
    public int Id { get; set; }

    public string Hash { get; set; }

    public string Salt { get; set; }

    public int UserId { get; set; }
  }
}
