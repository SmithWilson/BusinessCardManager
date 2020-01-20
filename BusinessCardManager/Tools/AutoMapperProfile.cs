using AutoMapper;
using BusinessCardManager.Entities.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Tools
{
  public class AutoMapperProfile : Profile
  {
    public AutoMapperProfile()
    {
      CreateMap<Entities.Models.BusinessCard, BusinessCardDto>().ReverseMap();
      CreateMap<Entities.Models.Profile, ProfileDto>().ReverseMap();
      CreateMap<ProfileDto, LoginedProfileDto>().ReverseMap();
    }
  }
}
