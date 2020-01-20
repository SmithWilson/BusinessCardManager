using BusinessCardManager.Entities.Models;
using EntityFrameworkCore.CommonTools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace BusinessCardManager.Cqrs.BusinessCard.Specifications
{
  public class GetBusinessCardByUser : Specification<BusinessCardManager.Entities.Models.BusinessCard>
  {
    public GetBusinessCardByUser(int userId)
      : base(entity => entity.ProfileId == userId)
    {
    }
  }
}
