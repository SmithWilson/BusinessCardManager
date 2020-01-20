using BusinessCardManager.Contracts;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessCardManager.Providers
{
  public class ImageProvider : IFileProvider
  {
    private readonly IHostingEnvironment _environment;

    public ImageProvider(IHostingEnvironment environment)
    {
      _environment = environment;
    }

    public void RemoveFile(string path)
    {
      var fullPath = $"{_environment.WebRootPath}/{path}";
      if (File.Exists(fullPath))
      {
        File.Delete(fullPath);
      }
    }

    public async Task<string> UploadImage(IFormFile file)
    {
      var extension = file.FileName.Split('.').Last();
      var basePath = $"{_environment.WebRootPath}";
      var imagePath = $"Files/Imgs/{Guid.NewGuid()}.{extension}";

      if (string.IsNullOrWhiteSpace(_environment.WebRootPath))
      {
        _environment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
      }

      var currentDirectory = $"{basePath}/Files/Imgs";
      if (!Directory.Exists(currentDirectory))
      {
        Directory.CreateDirectory(currentDirectory);
      }
      using (var fileStream = new FileStream($"{basePath}/{imagePath}", FileMode.Create))
      {
        await file.CopyToAsync(fileStream);
      }

      return imagePath;
    }
  }
}
