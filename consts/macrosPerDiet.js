const MACROS_PER_DIET = {
  ketogenic: {
    name: 'ketogenic',
    macros: {
      carbs: {
        value: 5
      },
      proteins: {
        value: 20
      },
      fats: {
        value: 75
      }
    }
  },
  lowCarb: {
    name: 'low carb',
    macros: {
      carbs: {
        value: 15
      },
      proteins: {
        value: 20
      },
      fats: {
        value: 65
      }
    }
  },
  atkins: {
    name: 'atkins',
    macros: {
      carbs: {
        value: 9
      },
      proteins: {
        value: 29
      },
      fats: {
        value: 62
      }
    }
  },
  paleo: {
    macros: {
      carbs: {
        value: 33
      },
      proteins: {
        value: 22
      },
      fats: {
        value: 45
      }
    }
  },
  mediterranean: {
    name: 'mediterranean',
    macros: {
      carbs: {
        value: 38
      },
      proteins: {
        value: 16
      },
      fats: {
        value: 46
      }
    }
  },
  zoneDiet: {
    name: 'zone diet',
    macros: {
      carbs: {
        value: 40
      },
      proteins: {
        value: 30
      },
      fats: {
        value: 30
      }
    }
  },

  vegetarian: {
    name: 'vegetarian',
    macros: {
      carbs: {
        value: 57
      },
      proteins: {
        value: 17
      },
      fats: {
        value: 31
      }
    }
  },

  ornish: {
    name: 'ornish',
    macros: {
      carbs: {
        value: 75
      },
      proteins: {
        value: 18
      },

      value: 7
    }
  },

  american: {
    name: 'american',
    macros: {
      carbs: {
        value: 50
      },
      proteins: {
        value: 18
      },
      fats: {
        value: 35
      }
    }
  },
  maintenance: {
    name: 'maintenance',
    macros: {
      carbs: {
        value: 50
      },
      proteins: {
        value: 30
      },
      fats: {
        value: 20
      }
    }
  },
  weightLoss: {
    name: 'weight loss',
    macros: {
      carbs: {
        value: 30
      },
      proteins: {
        value: 45
      },
      fats: {
        value: 25
      }
    }
  },
  bulking: {
    name: 'bulking',
    macros: {
      carbs: {
        value: 45
      },
      proteins: {
        value: 35
      },
      fats: {
        value: 20
      }
    }
  }
}

export default MACROS_PER_DIET
