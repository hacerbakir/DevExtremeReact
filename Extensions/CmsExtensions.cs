﻿using System.Text;

namespace WebApplication1.Extensions;

public static class CmsExtensions
{
    public static string ToSnakeCase(this string text)
    {
        ArgumentNullException.ThrowIfNull(text);
        if (text.Length < 2) return text.ToLowerInvariant();
        var sb = new StringBuilder();
        sb.Append(char.ToLowerInvariant(text[0]));
        for (var i = 1; i < text.Length; ++i)
        {
            var c = text[i];
            if (char.IsUpper(c))
            {
                sb.Append('_');
                sb.Append(char.ToLowerInvariant(c));
            }
            else
            {
                sb.Append(c);
            }
        }

        return sb.ToString();
    }
}