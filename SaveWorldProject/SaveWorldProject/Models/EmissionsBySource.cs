﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaveWorldProject.Models
{
    public class EmissionsBySource
    {
        public int Id { get; set; }
        public string Source { get; set; }
        public string Poluant { get; set; }
        public int Valoare { get; set; }
    }
}
