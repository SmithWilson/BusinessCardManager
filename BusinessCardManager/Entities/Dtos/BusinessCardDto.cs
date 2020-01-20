using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Entities.Dtos
{
  public class BusinessCardDto
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Adress { get; set; }
    public string Company { get; set; }
    public string Phone { get; set; }
    public string BusinessCardUrl { get; set; }
    public int ProfileId { get; set; }
  }
}
