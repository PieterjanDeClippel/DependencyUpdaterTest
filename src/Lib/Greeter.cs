using Humanizer;
using Newtonsoft.Json;

namespace Lib;

public static class Greeter
{
    public static string Greet(string name, int times)
        => JsonConvert.SerializeObject(new { message = $"Hello {name}", times = "time".ToQuantity(times) });
}
