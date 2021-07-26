const MACROS_PER_DIET = {
  ketogenic: {
    name: 'ketogenic',
    macros: {
      carbs: {
        persentage: '5%',
        value: 0.05
      },
      proteins: {
        persentage: '20%',
        value: 0.2
      },
      fats: {
        persentage: '75%',
        value: 0.75
      }
    }
  },
  lowCarb: {
    name: 'low carb',
    macros: {
      carbs: {
        persentage: '15%',
        value: 0.15
      },
      proteins: {
        persentage: '20%',
        value: 0.2
      },
      fats: {
        persentage: '65%',
        value: 0.65
      }
    }
  },
  atkins: {
    name: 'atkins',
    macros: {
      carbs: {
        persentage: '9%',
        value: 0.09
      },
      proteins: {
        persentage: '29%',
        value: 0.29
      },
      fats: {
        persentage: '62%',
        value: 0.62
      }
    }
  },
  paleo: {
    macros: {
      carbs: {
        persentage: '33%',
        value: 0.33
      },
      proteins: {
        persentage: '22%',
        value: 0.22
      },
      fats: {
        persentage: '45%',
        value: 0.45
      }
    }
  },
  mediterranean: {
    name: 'mediterranean',
    macros: {
      carbs: {
        persentage: '38%',
        value: 0.38
      },
      proteins: {
        persentage: '16%',
        value: 0.16
      },
      fats: {
        persentage: '46%',
        value: 0.46
      }
    }
  },
  zoneDiet: {
    name: 'zone diet',
    macros: {
      carbs: {
        persentage: '40%',
        value: 0.4
      },
      proteins: {
        persentage: '30%',
        value: 0.3
      },
      fats: {
        persentage: '30%',
        value: 0.3
      }
    }
  },

  vegetarian: {
    name: 'vegetarian',
    macros: {
      carbs: {
        persentage: '57%',
        value: 0.57
      },
      proteins: {
        persentage: '17%',
        value: 0.17
      },
      fats: {
        persentage: '31%',
        value: 0.31
      }
    }
  },

  ornish: {
    name: 'ornish',
    macros: {
      carbs: {
        persentage: '75%',
        value: 0.75
      },
      proteins: {
        persentage: '18%',
        value: 0.18
      },
      fats: {
        persentage: '7%',
        value: 0.07
      }
    }
  },
  american: {
    name: 'american',
    macros: {
      carbs: {
        persentage: '50%',
        value: 0.5
      },
      proteins: {
        persentage: '18%',
        value: 0.15
      },
      fats: {
        persentage: '35%',
        value: 0.35
      }
    }
  },
  maintenance: {
    name: 'maintenance',
    macros: {
      carbs: {
        persentage: '50%',
        value: 0.5
      },
      proteins: {
        persentage: '30%',
        value: 0.3
      },
      fats: {
        persentage: '20%',
        value: 0.2
      }
    }
  },
  weightLoss: {
    name: 'weight loss',
    macros: {
      carbs: {
        persentage: '30%',
        value: 0.3
      },
      proteins: {
        persentage: '45%',
        value: 0.45
      },
      fats: {
        persentage: '25%',
        value: 0.25
      }
    }
  },
  bulking: {
    name: 'bulking',
    macros: {
      carbs: {
        persentage: '45%',
        value: 0.45
      },
      proteins: {
        persentage: '35%',
        value: 0.35
      },
      fats: {
        persentage: '20%',
        value: 0.2
      }
    }
  }
}
export default MACROS_PER_DIET
