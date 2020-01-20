using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessCardManager.Contracts;
using BusinessCardManager.Entities.Dtos;
using BusinessCardManager.Filters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BusinessCardManager.Controllers.Api
{
  [Route("api/image")]
  [ApiController]
  public class ImageUploaderController : ControllerBase
  {
    [HttpPost]
    public async Task<IActionResult> Upload(
      [FromServices] IFileProvider provider)
    {
      var request = HttpContext.Request;
      var file = request.Form.Files.GetFile("file");
      return new JsonResult(await provider.UploadImage(file));
    }

    [Authorize]
    [HttpDelete]
    public async Task<IActionResult> Remove(
      [FromServices] IFileProvider provider,
      [FromBody] FileInfoDto filiInfo)
    {
      provider.RemoveFile(filiInfo.Path);
      return Ok();
    }
  }
}
