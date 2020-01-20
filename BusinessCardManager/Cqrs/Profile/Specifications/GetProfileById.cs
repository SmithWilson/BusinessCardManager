using BusinessCardManager.Entities.Models;
using EntityFrameworkCore.CommonTools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.Profile.Specifications
{
  public class GetProfileById : Specification<BusinessCardManager.Entities.Models.Profile>
  {
    public GetProfileById(int id)
      : base(entity => entity.Id == id)
    {
    }
  }
}
