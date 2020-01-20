using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Entities.Dtos
{
  public class UploadFileDto
  {
    public IFormFile File { get; set; }
  }
}
