using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JwtAPI.Entities
{
    public class Login
    {

        public int Id { get; set; }
        [Required]
        [JsonProperty("user")]
        public string User { get; set; }
        [Required]
        [JsonProperty("password")]
        public string Password { get; set; }
    }
}
