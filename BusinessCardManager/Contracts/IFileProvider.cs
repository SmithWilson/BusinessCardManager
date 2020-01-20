using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Contracts
{
  public interface IFileProvider
  {
    Task<string> UploadImage(IFormFile file);
    void RemoveFile(string path);
  }
}
