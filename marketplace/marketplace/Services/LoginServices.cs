using marketplace.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace marketplace.Services
{
    public class LoginServices
    {
        public string LoginIn(Login login)
        {
            var client = new HttpClient
            {
                BaseAddress = new Uri($"http://localhost:63440/api/Logins/")
            };
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                HttpRequestMessage requestMessage = new HttpRequestMessage(HttpMethod.Post, $"" + client.BaseAddress + "LoginIn");

                var options = new
                {
                    user = login.User,
                    password = login.Password
                };

                var stringData = JsonConvert.SerializeObject(options);
                var content = new StringContent(stringData, Encoding.UTF8, "application/json");
                requestMessage.Content = new StringContent(stringData, Encoding.UTF8, "application/json");

                response = client.SendAsync(requestMessage).Result;
                
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadAsStringAsync().Result;
                    var resultString = JsonConvert.DeserializeObject(result);
                    return resultString.ToString();
                }
                else
                {
                    var result = response.Content.ReadAsStringAsync().Result;
                    var resultString = JsonConvert.DeserializeObject(result);
                    return resultString.ToString();
                }
            }
            catch (Exception ex)
            {
                response.StatusCode = HttpStatusCode.InternalServerError;
                Console.WriteLine(ex);
                return response.ToString();
            }
        }
    }
}
