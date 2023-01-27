using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Application.Interfaces;

namespace Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        public IHttpContextAccessor _httpContextAccessor { get; }
        public UserAccessor(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string GetUsername()
        {
            return _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
        }
    }
}
