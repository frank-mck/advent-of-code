const data1 = `Card   1: 27 61 49 69 58 44  2 29 39 10 | 97 96 49 78 26 58 27 77 69  9 39 88 53 10  2 29 61 62 48 87 18 44 74 34 11
Card   2: 65 22 99 75 72 29 38 82 80 66 | 87 15 21 50 55 72  4 54 46 29 95  2 65 75 18 89 99 80 38 82 56 33 22 66 71
Card   3: 27 95 96 34 14 42 40 60 50 93 | 35 95 22 34 50 27 29 77 78  4  5 61 93  8 59 63 16 45 80 81 92 23 42 88 82
Card   4: 58 73 96 88 51 32  1 40 19 85 | 93 72  7 85 52 51  2 96 40 90 32 57 89 12 88 44 19 53 58 78 73 25 50  1 84
Card   5: 69 52 10 51 73 47 22 84 36  8 | 40 84 69 32 73 33 98 76 51 22 10 97 36 52 68  8 43 93 29 44 85 13 26 47 77
Card   6: 39 57 46 20 17 67 10 77 90 99 | 73 26 60 41 77 61 96 25 59 94 22  5 55 95 14 33 62 15  7 75 86 93 74 32 42
Card   7:  7 25 29 75 24 19 78 77 18  8 | 77 80 54 85  4 66 12 82 23 17 53 20 91 32 94 59  9  6  3 97  8 55 60 11 36
Card   8: 14 82 46 78  3 64 62 69 92  6 | 87 14 88 92 48 64 52 83 37 29 56  3 86 27  6 62  1 13 82 78 69 25 15 31 46
Card   9: 53 43 10  8 47 41 67 95 90 11 | 10  3 71 67 54 59 24 25 53 70 43  7 93 41 85 42 26 98  8 13 87 99 11 58  2
Card  10: 72 45 30 67 14 98 15 27 62 66 | 36 59 90 14 98 66 45 26 97 76 62 58 67 33 64 39 22 15 30 68 27 41 24  7 72
Card  11: 45  3 18 55 42 83 79 37 30 49 | 88 97 34 71 74 14 53 79 50 18 55 60 72 28  3 19 30 63  1 90 49 32 86 70 37
Card  12: 94 10 20 82 41 84 40 71 33  3 | 48 19 94 87 56 64 16 20  4 95 31 36 37 40 57 39 18 14 46 82 47  1  3 23 83
Card  13:  5 27 33 28 51 14 99 68 38 65 |  2 27 14 39 41 51 69 77 38 28 15  5 65 11 57 97 76 34 99 87 31 46 68 33 16
Card  14: 94 37 74 54 72 20 22 53 70 59 | 26 25 96 10 20 21  5 52 72 85 37 73 22 56 94 23 59 84 34 54 44 27 70 92 76
Card  15:  6  7 59 98 17 34 15 97 72 45 | 48 50 77  6 35  7 86 17  1 27 59 54 44 97 47 72  3 34 12 37 15 69 49 64 80
Card  16: 35 27 20 21 94 40 80  4 53 34 |  1 80 22 16 97 96 87 55 93 70 13 95 76 24 41 85 83 46 67 68 79 98 48 25 86
Card  17:  3 48 35 96 80 15 54 16 67 92 | 94 96 34 38 57  1 67 41  9 60 80 54 15 85  4 21 75 59 66 81 84 43 48 23  3
Card  18: 34 59 22 95 30 44 91 57 78 53 | 82 47 55 36 67  7 59 25 84 70 37 49 77 20 88 97 98 61 44 46 54  4 86 11 58
Card  19: 31 19 44 79 94 29 18 90  3 54 | 60 76  7 48 87 36 31 57 11 21 94 20 62 53 66 39 72 85 17 63 49 24 79 37 68
Card  20: 37 33  5 55 69 42 96 91 50 49 | 19 60 46 35 57 39  7  5 86  4 73 84 28 20 81 87 18 61 29 56 68 42 27 64 38
Card  21: 23 95 53 13 56 62 76 64 98 63 | 36 20 61 21 67 14 82 44 59 97 56  9 47 93 63 18 16 46 25 87 19 88 85 95 29
Card  22: 70 84 58 75 23 68 35 39 31 22 | 49 13  6 12 24 83 97 76 43 57 65 42 98 16 54 15 91 44 55 90 81  9 36  2 27
Card  23: 61  4 42 33 21 94 67 86 91 66 | 81 34 17 92 97 12 50 69 19 63 68 44 80 72 83 95 10 31 42 75  5 74 60  9 24
Card  24:  1 31 21 84 98 51  2  6 86 53 | 95 23 99 47  9 57  7 27 36 89 24 77 46 39 25 78 17 14 16 87 73 61 90 32  5
Card  25: 54 19 59 74 58 36 46 39 31 27 | 54 42 46 56 59 45 39 79 19 88 27 91 74 38 48 15 36 31 73 35 64 60 62 58 78
Card  26: 83 26 43 71 24 22 93 94 10  6 | 94 76 93 22  8 85 62 24 40 79 31 97 64 71 10 87 26 83 58 28 43  6 44  3 54
Card  27: 47 73 50 11  5 55 46 97  8 84 | 41 75 97  8 23 15 26 86 42 98 43 47 49 62 11  9 69 92 88  5 73 18 76 93 22
Card  28: 60  6 84  1 90  4 45 25 44 30 | 65 13 69 61 91 50 89 88 71 36 21  5 86 10 41 28 59 47 79 98 14 78  7 25 54
Card  29: 65 16 91 46 52  7  1 41 49 32 | 10  6 32 53 12 43 62 50 37 49 66  3 97 16 72 57 81 86 91 46 89 52 71 82 14
Card  30: 94 63 59 54 49 17 68 84 91 64 | 37 91 13 24 14 73 96  1 90 87  2 66  5 74 34 93 41 48 79  6 33 16 40 49 64
Card  31: 34  6 27 31 92  2 25 13  5 83 | 92  2 20 11 34 48 13 25 39 87 10 16 12 15 83 57 22 76 51 55  6  5 74 38 31
Card  32:  3 67 34 83 26 14 47 32 42 15 | 30 79 62 25 63 41 53 84 40  8 94 44  9 54 93 18 77 95 59 37 86 50 51 17 87
Card  33: 65 88 76 95 94 71 22 99 66 60 |  7 81 32 62  5 99 69 55 19 74 96 20 36 40 84 51  8 39 48  3 93  6 98 46 41
Card  34: 50 25 13 64 95 62 24  5  7 85 | 15 13 43 65 55  2 99 27 24 42 82 64 77 21 41 85 72 62 52 89 81 96 61 95 10
Card  35: 33 11 79 32 91 86 12 39  5 71 |  5 91 62 16 29 82 88  2 51 80 17 99 38 58 36 12 81 43  6 49 42 37 35 46 47
Card  36: 48 60 23 73 91 80 17 57 12 85 | 23 11 98 10 89 15 26  3 91 43 33 27 77 80 90 45 28 81 75 29 69 16 60 96 86
Card  37: 64 82 14 98 90 74 57 60 54 45 | 30 49 57  3 46 11 64 97  6 47 41 77 82 94 15 29 61 48 75 89 21 23 78 55 33
Card  38: 25 18 35 45 98 72 47 83 64 16 |  8 58 86 29 33 37 71 87  4 25 31 89 24 63 36 16 73 93 48 65 67 91 75 60 13
Card  39: 88 36 73 50 12 61  8  4 45 53 | 35 31 97 68 41 10 52 38  7 49 50  3 23 25 21 13 90 75 47 73 27  2  9 48 77
Card  40: 15 60 33  4 31 87 54 13 18 47 | 71 42 36 49 37 14  9 22  1 97 16 53 45 10 32 52 79 63 66 83 25 57 82 99 77
Card  41: 96 67 69 23  6 24 77 81 32 13 | 58 78 54 26 50 62 49 17 38 85 89 90 25  5 51 91 52 53 65 44 93 12  8 98 73
Card  42: 93 53 56 41 39 13 54 20 96 66 | 65 81 30 90 95 74 51 85 41 86 13 22 78 46 62 35 87 57 21  5 83 10  7 55 69
Card  43: 49 29 51 42 62 46 44 65 92 47 | 46 47 49 42 92 54 12 68 29  3 81 51 64 44 17  1 62 23 56 87 65 85 70  6 32
Card  44: 68 21 97 69 99 31 67  5  7 88 | 48 80 41 69 13 63 23 59  9 54  6 85 35 91 46  2 60 64 29 25 89 28 61 37 95
Card  45: 57 39 86 33 23 96 69 46 40 83 |  8 93 40 72 43 85 33 70 15 52  3 27 89 25 75 23 86 83 42 88 97 73 80 96 47
Card  46: 64  3 77 80 20 63 30 99 26 85 | 99 26 81 82 20 63 65 67 77 83 64 34 45 33 40 97  7 80 60 92 12 90  6 71 85
Card  47: 94 44 75 30 86 26 45 69 89 38 | 27 50 10 12 16 32 30 45 89 37 20 43 39  7 44 86 38 87 26  9 22 79 11 35 53
Card  48: 53 35 32 39 21 17 95 79 76  5 | 21 14 32 39 43 35 70 99 46 86 71 40 50 64 11 60 92 93  5 72 83 18 95 53 34
Card  49: 23  7 72 99 49 95 63 20 44 88 | 47 20 74 27 88 82 91 52 49 46 92 72 13 12 80  7 75  9 99 39 23  4 31 95 84
Card  50: 85 34 33 69 60 87 99 51 71 14 | 18 23 33 48 66  6 56 68 26 35 41 71 45 64 20 19  2 92 74 39 46 32 31 17 21
Card  51: 59 26 52 31 47 96 25 36 63 67 | 35 18 56 71 90 84 47 66 63 96  7 10  3 50 32 70 94 49 62 74 46 33 60 93  9
Card  52: 21 80 84  6 95  8 98  4 91 55 | 79 36 18 85 86 10 32 70 30 91 66 69 34 49 98 23  4 55 22 81 83 38 52  3 99
Card  53: 30 40 10 21 29 58 31 85  2 61 | 92  3 91 33 19 32 42 21 76 95 93 94 82 67 18 63 25 62 20 99 30 54 72 78 74
Card  54:  2  5 33 40 32 27 36 61 89 13 | 40 83 80 32 14 23 55 49 74 45 71 82  6 13 76 35 72 28 98 29 11 24  2 86 53
Card  55: 95 33 11 78 50 89 27  4 35 32 | 58 14  4 57 59 10 65 29 85 71  9 51 17 49 98 25  7 31 97 15 36 80 79  1 22
Card  56: 11  2 50 52  4 38 60 78 68 26 | 65 23 57 37 44 47 28 75 32 22 66 67 58 53 99 59 89 70 19 64 54  1 18 82 71
Card  57: 35 87 26 17 27 58 99 75 79 90 | 78 19 59 98 83 69 29 86 23 45 61 21 41 34 66 15 94  4 22 12 89 71 73 92 65
Card  58: 25 60 78 79 27 86 77  3 37 75 | 43 99 62 82 88 44 51 59 21 73 39 30 11 38 29 16 87  8 33 95 13 14 32 10 23
Card  59: 53 93 58  1 28 27 64 34 76 20 | 16 53 69 63 56 51 90 95 34 37  1 77 93 27 45 17 64 12 84 58 13 76 28  6 20
Card  60:  5 23 68  9 38 12 10 97 70 82 | 43 60 21 95 14 69 61 74 22 40 33 49 17 84  4 24 13 19  1 57 62 37 92 45 72
Card  61: 39 98 85 63 87  5 91 61 57 74 | 33 39 61 54 87 37 13 69 57 85 98  7 83  5 91 97 50 63 74 20 26 30 71 56 23
Card  62: 62 85 77 98 66 84 69 16 24 83 | 78 66 46 58 12 31 29 92 77 85 59 24 83 84 43 69 62 96 16 81 98 32 35  3  1
Card  63: 54 56 39 78 46 26 36 65 61 33 | 53 78 36 25 16 31 30 10 90 46  9 62 80 61 29 76 18 91 51  8 74 58 54 65 70
Card  64:  8 97 74 12 13 83 23  6 40 69 | 30 85 50 69 40 83 36  4 13 88 12 97 67 55 71 64 65 38  8 91 74 56 23 52  6
Card  65: 29 38 74 28 88 34  8  1 44 73 | 34 28 41 27 73  9 95 65 35 46 15 80 21 72 68 64 26 43 47  1 29 74  8 31 76
Card  66: 19 86 49 80 95 54  1 41 24 77 | 11 41 54 65 86 20  9 45 16 55  6 80 60  5 58 76 24 49 38 77 34  1 82 19 95
Card  67: 14 10 60  4  5 77 82 94  9 24 | 48 19 99 73 89 78 43 26 62 28 71 96 38 57  7 68 63 60 10 85 93 50  5 41 76
Card  68: 27 70 37 12 51 73 99 47 33 32 | 43  9 38  8 65 73 82 42 17 84 55 46 31 35 44 49 95 62 52 10 14 25 66 37 92
Card  69: 90 69 60 85 34 56 72 16 20 35 | 13 90 42 65 72 56 39 34 20 59 28 92 40 69 32 85 16 93 79 97 35 98  5 60 26
Card  70: 23 98 49 33 51 58 47  7 70 32 | 69 85 66 86 32 58 28 23 47 51 48  3 52 87  7 16 92 25 75 89 33 39 14 90 70
Card  71: 70 84 44 96 76 49 34 93 87 14 | 59 14 19 67 17 28  5 56 37 52  6 18  2 44  8 63 82 57 66 34 91 73 16 54 97
Card  72: 77 48 90 12 62 14 73 51  7 10 | 76 54 70 56 78 65 25 18  2 42 26 61 36  1 13 58 92 27 47 90  4  3 28 39 72
Card  73: 89 29  6 91 49 99  2 27 75 36 | 22 67 98 35 71  1 99  9 33 78 97 19 73 46 47 57 90 15 92 10 12 69  7 62 95
Card  74: 38 74 32 85 47 41 87 59 61 73 | 28 68 34 40 61  1 21 42  8 90 51 82 77  3 80 71 67 87 41 45 92 64 70 13  2
Card  75:  1 41 81 26 87 15 63 16 83 67 | 64 83 11 34  7 36 37 15  4 52 87 50 24 21 26 41 94 70 67 43 99 12 20 55 51
Card  76: 62 94  6  8  2 40 43 42 46 53 | 59 80  8 99 26 48 23 38 15 24 61 27 46 70 93 94 11 81 42 74 67 89 12  6 53
Card  77: 17 15 62 90 77 30  5 97 59 10 |  6 53 67 83 63 44 43 25 11 20 41 70 39 69 97 93  5 92 51 37 23 19 65 71 56
Card  78: 14 27 34 77 78 25 94 93 70 80 | 89  1 38 45 15 18 14 86 81  8 87 60 21 40 12 85 70 97 73 76 62 94 23 20 75
Card  79: 87 22 38 56 58 10 94 19 68 83 |  8 76 58 87 34 52 30 32  9 55 71 97 50  6 33 22 51 11 88 44 47 42  5 41 27
Card  80: 53 88 71 44  3 43 64 93 83 37 | 34 65 18 47 82 96 99 38  4 20 74 12 45 59 43 35 84 29 46 39 98 33  8 17 50
Card  81: 49 78 31 83 35 16 46 43 25 12 | 94 74 28 54 67 21 16 30  7 86 93  6 95 26 80 10 55  5  1 85 79 58 18 51 72
Card  82: 80 17 56 49 97  9 94  2 53 65 | 75 31 62 92 48 40 32 19 27 21 39 57  5 10  8 70 83 52 89 76 51 38 13 88 98
Card  83:  8 64 56 30 93 73 40  7 27 24 | 38 76 27 25 40 83 42 17 55 89 34  7  5 39 93 74 37 29 51  3 19  1 18 30 52
Card  84: 50  4 99 75 59 57 96 61 46  6 | 51 46  4 53 27 63 30 68 76 61 99 75 15 13  6 20 96 36 59 50 26 62 25 57 52
Card  85: 14 82 80  7  4 59 31 15 21 23 | 15 98 45 25  4  9 23 30 14 75 59 80 35 46 82 76 31 81 21  7 11 69 91 96 49
Card  86: 99 17  2 89 42 19  3 94  4 12 | 17 94 34 47 64 57 19 77 96 42  2 33 99 73 63 89 41 32 15 56  4 12 98  3 39
Card  87: 43 60 77 76 78 19 51 99 39 57 | 49 26  8  1 92 70 61 54 16 98 37 32 44 43 51  9  6 30 66 74 75 72 14 40  3
Card  88: 24 22 59 84 72 98 92 75 52 82 | 80 56 85 37 68 71 62  4 38 84 22 16 98 75 23 52 64 59 92 72 29 24 82 93 50
Card  89: 79  5 64 69 73 95 74 49 56 47 | 47 49 61 93  6 69 85 42  5 88 66 59 19 96 72 95 26 84  9 44 79 92 25 73  1
Card  90: 67 63 84  5 13 81 38 78  9  2 | 97 53 90 13 29 38 62 46 83 70 33 47 45 99 54 65 81 11 61 82 26 91 27 88 22
Card  91: 39 72 25 54 90 11 79 42  4 14 | 53 83 63 25 34 11 13 78  2 15 42 62  7 28 72 91 38 54 37 75 71  5 20 14 59
Card  92: 46 70 28  3 20  9 45 32 77 14 | 85 79 49 45 64 78 33  9 53 36 96 28 29 21 50 80 27 87 22  3 31 73 14 32  2
Card  93: 81 59 32 19 80 13 78 70 65 38 | 32 14 23 73 65 81 56 26 50 70 19 59 27 15 17 13 48 38 53  3 77 16 80 78 36
Card  94: 86 53 49 85 95 70 27 32  4 24 | 41 84 58 73  4 13 88 55 94 46 90  6 50 65 21 53 97 14 10 44 69 59 56 79 68
Card  95: 59 99 76 63 47  4  8 67 23 96 | 69  9 21  8 47 75 44 29  4 12 88 38 11 13 23 85  6 18 97  2 34  1 17 32 16
Card  96: 82 97 72 34 28 52 78 80 20 92 | 56 83 32 84 21 74 25 24 61 23 88 66 94  1 29 73 35 70 57 11 81 26 60 63 58
Card  97: 34 76 39 38 23 51 55 25 40 22 | 91 43 59 66 40  3 45 24 56 96 98 73 29 71 30  1 50 46 78  8 11  9 27 64 26
Card  98: 66 42  1 45 92 32 71 88  5 82 | 50 88 42 70 60  6 27 49 36  1 35 53 82 14 71 77  5  7 78 48 31 81 52 92 45
Card  99: 12  2 77 94 59 98 95 10 39 32 | 76 88  5 12 45 55 27 17 11 98 10 87 97 99 20 78 46  4 96 26 14 82 22 39 16
Card 100: 22 96 56 41 90 47 29 58 87 32 | 15 65 80 82 49 24 33 85 20 74 70 54 50 12 78 47 28  9 32 16 67 71 99  1 17
Card 101:  1 23 74  4 72 26 75 68 89 83 | 83 58 63  1 52 20 26 33 64 41 53 65 57 80 69 38  4 90 74 39 32 13 61 55 14
Card 102: 75 14 28 46 23 36 68 71 70 98 | 19 33 54  4  5  8 41  6 14 88 46  3 62 10 48  7 77 92 16 39 40 27 31 99  1
Card 103: 65 33 61 53 51 29 26 83 19 18 |  7  2 82 55 13 22  6 27 90 99 14 50 79 25 63 46 97 81 85 61 87 28 75 31 96
Card 104: 51 87 57 78 60 94 82 12 88 11 | 72 78 77 70 54 39 55 24 86 18 58 52 20 63 29 33 31 97 66 69 62  6 56 25 35
Card 105: 17 55 95 42 16 52 72  9 79 59 | 98 30 35 20 46 43 51 66 75 48 52 44 34 96 65 37 41 50 74 21 38 18 73 10 76
Card 106: 44 91 36 94 24 31 83 50 70 52 | 18 38 42 17 12 56 64 32 79 76 39 73 60 80 53 57 96 88 82 77  4 69 23 45  7
Card 107: 45 48 58 26  5  2 35 63 78 70 | 49 71 10 21 50 13 95  6 68 84  4 40 45 31  1 34 27  2  5 85 39 44 98 83 46
Card 108: 18  4 63 24 83 40 16 48 21 26 | 87 48 21 59 22  6 26 40 98 69 43 14 83  4 16 15 58 68 64 57 63 72 18 60 24
Card 109: 36 46 49 57 83 68 45 30  1 58 | 35 38 22 12 39 90 86 26 72 67 81 87 79 27 25 29  4 99 41 59 96 94  9 28 75
Card 110: 58  2 71 72 92 91 75  4 19 81 | 75 26 14 91 71 19 88 11 13 72 32 58 92 24 96 33 74 46 27 38  4 81 20 28  2
Card 111:  3 78 14 85 53  1  2 32 59 10 | 20 62 53 94 72 45  2 46 87 17 98 74 44 25 47 60 83 59 65 81 38 24 23 39 12
Card 112: 61 37 90 17 55 94 89 87  5 39 | 90 27 88 64 94 13 41 55 44 21 30 37 84 39  5 32 46 86 14 54 85 17 89 35 31
Card 113: 73 76 33 37 82 79 56 22 57  6 | 76 20 41 85  2 60 37 32  6 82 94 26 63 56 16 28 33 47 70 99 73 40 22 79 57
Card 114: 11 54 66 70 60 78 89 94 80 96 | 14 76 70 33 48 53 90 47 66  6 64 96 83 20 56 34 35 11 75 89 41 60  7 39  1
Card 115: 45  5 33 12 63 95 27 42  1 84 | 51 10 31 27 45 42  1 74 48 72 53 69 63 47 83 33 91 95 39 12 84 11 23 28 65
Card 116:  5 77 89 65 52 69 32 63 23 85 | 82 73 70 91 11 28 41 14 15 62 37 94 90 95 56 30 96 25 63 47 43 49 83 68 29
Card 117: 64 80 98 39 45 11 40 22 49 55 | 44 88 40 80 49 67 69 79 62 42 43 30 55 18  5 59 87 98 54 23 45 39 22 11 64
Card 118: 44 61 75 42 48 66 36 88  9 54 | 62 81 70  3 35 34 79 38 10 32 19 14 65 30 18 42 55 64 92 88 45 83 11 43 23
Card 119: 82 29 59 20 19 18 66 28 23 49 | 20 19 25 70 59 18 14 36 58 40 23  3 24 80 30 78 88  2 79 72 82  7 66 49 47
Card 120: 61 40 26 25  4 42 19 76 51 22 |  6 25 11 24 22 44  4 98 49 97 46 88 23 55 66 48  9 33 85 65 84 29 13 60 83
Card 121: 97 31 11 71 90 96 84 76 53  8 | 71 82 44 99 98 47 40  4 52 53 84 43 27 94 13 88  3 18 28 11 60 24 21 20 38
Card 122: 29 65 38 48 52 55  3 32 35 95 | 91 45 82 57 38 78 47 75  2 12 46 50 23 87 60 99 18 29 65 25  1 89 35 86 59
Card 123:  4 91 26 38 36 83 60 72 19 56 | 35 26 36 22 46 69 14  5 70  3 74 47  7 63 72 89 25 60 17 19 62 76 93 75 38
Card 124: 16 17 73 87 56 22 10 44 92 58 | 54 61 96 42 83 97  5  2 73 69 37  9 50 79  6 57 63 40 75 49 64 70 34 52 11
Card 125: 37 77 17 70 18 59 65 81 48 15 | 59 49 62 81 12  1 71 90 99 36 25 37 60 64 19 83 21 11  3 27 52 32 45 46 72
Card 126: 30 34 31 37  3  7 10  8 45 25 | 78 25 12 34 89 63 59 96 41 75 58 71 93 28 17 90 84  7  4 21 13 33 52 14 19
Card 127:  3 31 15 35 26 88 75 82 77 68 | 13 33 47 92 51 32 74 66 99 44 79 62 22 64 43 23 12 49 60 57  4 83 89 65 21
Card 128:  9 72 20 10 14 95 86 50 85 82 | 82 25 99 53 97 31 42  8 89 68 58 43 15 30 47  1 26 67 87 57 78 18 60 61 75
Card 129: 73 72 68 95 79 76 69 24  1 98 | 15 51 83  7 74  5 93  8 27 40 78 81  3 37 44 14 21 99 97 67 57 71 84 86 64
Card 130: 30 80 40 86 26 36 75 44 41 57 | 81 23 30 73 12 44  8 97 39 42 87 58 33 85 98 57 26 92 80 45 63 21 43 11 99
Card 131: 22 20 60 75 26 57 33 88 74 38 | 21 92 47 36  5 65 69  9 39  1 33 87 34 53 72 44 15 51 58 25 18 67 19  2 93
Card 132: 49 65 86 52 33 67  8 83 61  3 | 43  7 74 30 19 53 89 94 32 11 83 59 71 33 51 20 65 41 86 82 49 25 21 63 18
Card 133: 91 17 74 21 23 47  9 57 82 35 | 23 98 88 82 33  5 92 99  7 57 74 96  9 84 66 24 65 46 40 17  2  4 47 21 51
Card 134: 47 26 41 16 61 76 72 98 24 93 |  2 25 93 11 31 14 91 73 48 47 64 98 85 26 95 19 16 69 13 10 61  9 56 52 24
Card 135: 23 13 58 83 99 69 93 33 10 37 | 35 54 80 42 58 46 88 19 99 81 47 89 10 30 33 92 69 23 13 37 59 34 39 93 62
Card 136:  1 36 37 12 22 19 42 56 98 17 | 70 42 47 17 29 61 73 18 94 72 20 80  7 78  6 15 66 37 71 97 44 96 24 43 23
Card 137: 81 73 66 58 28 36 27 19 67  4 | 21 85 77 72 99 29 38 73 71 86  6 16 58 93 79 91 39 66 80 67 81 20 11 34 40
Card 138: 30 89 31 51  9 63 81 38 91 14 |  1 32  6  9 91 81 56 95 89 74 96 31 44 23 82 54 39 16 66 87 93 46 20 12 60
Card 139:  7 22 84 59 50 53 73 13 97 26 | 17  7 46 18 98 82 53 81 10 39 90 45 16 47 95 15 43 19 50 58 99 13 35 14 12
Card 140: 93 88  6 10 70 26  9 98 29 73 | 35 46  6 48 13 93 61 83 25 19 67 45 89 58 28 39  3 98 75 59  4 81 88 50 54
Card 141: 12  6  9 54 93 16 99 71 36 11 | 88 98 87 30 35 93 14 54 82 48 78 13 55 90 36 80 46 63 83 39 61 23 69 96  8
Card 142: 23 50 74 59 27 44  9 24 48 97 | 51 20 19 44 28 83 50 67 70 32 69 37 62 45 65 82 55  2 33 97 14 60 86 87 27
Card 143: 79 37 21 69 97 74 33 16 39 83 | 98 39 81 84 66 24 17 87 27 48 20 47 78 61 90 53 43 41 42 92  1 52  5 15 59
Card 144: 92 31 18  6 70 10 93 56 95 43 | 47 32 28 23 77 55 94 42  4 64 14 59 81 97 96 45 29 78 54 69 21 76 92 48  7
Card 145: 14 42 45 75 62  1 47 66 31 23 | 30 68 76 97 65 83 22 89 34 80 38 42 62 59 74 56 44 48 71 33 51 82 36 54 40
Card 146: 22 80 81 31 45 84 91 69 47 66 |  5 43 24 39 70 78 58 79 68 88 53 11 63 32 92 99 40 10 34 83 65 28 76 30 19
Card 147: 83 67 45 87 14 75 29 97 64 94 |  2 86 23 53  1 63 34 54 79 82 35 88 41 44 17 13 37 12 10 56 57 31 70 30 68
Card 148: 90 42 32 81 64 66 88 60 97  7 | 46 92 67 88 89  7 81 90 66 73 57 37 26 12 10 60  3 97 42 32 87 49 75 58 64
Card 149: 26 62 65 96 74  6 48 61 91 83 | 74 26 85 51 89  6 44 91 75 65  1  3 96 54 20 77 87 42 61 14 62 68 24 88 17
Card 150: 14 58 89 56 74 82 75 60 17 29 | 83 27 62 14 66 58 89 75 17 74 16  5 46 56 29 50 57 55 39 54 98 60  4 82 68
Card 151: 24 33 68 94 57 59 46 17 84 80 | 43 76 66 46 92 39 73 59 84 68 11 81 87 85 62 33 80 99 95 24 17 57 30 97 94
Card 152: 69 58 62 31 16 20 40 98 96 64 | 63 71 56 31 54  5 85  3 77 42 53 51 19 55 37 49 79 13 80 75 39  6 50 84 40
Card 153: 43 50 22  2 47 75 76 56 26 80 | 80 70 19 52 43 27 56 26 86 47 50 13  2 88 93 11 74 23 22 57 90 81 40 76 75
Card 154: 10 79 52 43 44 26 55  6 73 88 | 37 57 55 40 65 47 14 17 39  1 18 51 67 19 21 12 83 59 45 73  3 32 23 88 10
Card 155: 69 40 90 61 59 70 77 50 31 15 | 31 34 76 14 10 91 12 86 37 24 68  8 15 59  3 35 84 97 30 77 46 70 40 69 61
Card 156: 65 28  6 23 17 62 13 37 86 73 |  9 69 65 75 18 14 97 57 20 61 94 56  8 58  1 66 21 60 89 63 54 55 76 30 87
Card 157: 52 34 98 50 56 69 68 45 20 11 | 34 54 69 41 68 20 44 50 76 65 35 24 84 56 45 51 98 64 23 33  9 43 91  2 97
Card 158: 12 52 92 10 96 84  2 24 14 51 | 85 15 21 63 72 37 95 93 24  5 67 96  6 58 46 22  3 65 99 17 11 10 13 92 78
Card 159: 85 42 96 78 39 75 21 50 14 20 | 57 88 68 79 61 20  1 78 35 59 12 76 42 92 96 75 52 13 50 89 53 81 11 69 49
Card 160: 67 59 62 15 26 85 53 79 42 63 | 53 46  1 30 92 23 91 95 88 89 60 38  2 83 96  4 78 37 14 28 69 22 32 41  3
Card 161: 38  4 97 98 20 55 51 64 80 53 | 53 34 94 65  3 23 45  1  4 72 64 67 51 39 24 63 90 66 29 14 61 40 91 82 49
Card 162: 41 19 60 53 94 79  1 77 63 47 | 79  6 42 68 95 94 66 27 24 76 61 96 20 84 60 25 85 78 67 63 53 12 89  8 51
Card 163: 33 83 82 29 51 57 63 88 66 74 |  9 71 58 88 64 70 96 29 77 25 24 55 21 35 81 33 23 45 18 34 63  6 44 83 17
Card 164:  1 34 54 15 24 97  8 96 73 26 | 42  6  3 21 11 27 69 92 39 59 45 96 73 26 24 98  2 81 83 17 62 54 70 52 95
Card 165: 75 92 74 11  5  1 91 36 32 24 | 87 16 28 41 79 88 96 63 86 31 58 35 65 68  8 77 42 52 38 19 70 59 14 57 37
Card 166: 22 87 29  9 56 32 96 28 61 71 | 80 50 45 12 42 72  5 11 63 62 84 39 20 85 95 47 37 91 60 27 81  2 14 33 51
Card 167: 60 89 56 55 84 30 95 86 11 79 | 26 94 42 66 52  2 98  8 38 71 11 80 19  4 62 10 89 27 91 61 70 90 63 16 68
Card 168: 59 90 46 84 16 39 34 88 81 83 | 37 56 92 96 59 26  5 45 67  1 63 73 55 21 33 12 79 13 17 89 82  3 43 85 18
Card 169: 40 31 62 10 36 69 84 23 95 98 | 22 78  4 46 94 83 60 19 90 70 86  8 20 27 35 17 95 85 14 21 28 61 16 74 37
Card 170: 11 57  4 84  3 28 89 37 50 23 | 42 59 63 33 62 61 75 14 73 68 69 72 67 45 47 58 10 79 91 98 44 49 27 76 25
Card 171: 37 47 28 12 74  3 96 26 95 22 | 94 79 13 35 89 57 19 71 15 11 78 45 24 32 87 61 67 51 36 73 14 23 70  2 56
Card 172: 81 58 92 24 61 10 29 77 93 68 | 92  8 77 73 86 57 93 91 61 19 49 88 23 24 72 64 10 31 32 12 81  4 29 58 68
Card 173:  4 79 39 55 62 88 18 87 24 96 | 79 87 74 39 16 91 55 71  2 88 54  1 58 20 90 18 62 86 43  4 93 24 99 84 96
Card 174: 15 69 50 70  4 98 73 68 46 22 | 93 36 96 73 49 64 74 46 78 38 22 23 53 17 69 68 89 43 71 94 79 16 58 60 19
Card 175: 29 61 14 30  9 23  7 31 60 49 | 78 73 61 91 31 27 63 30  9 64 12 51  8 56 74 36 22 88  1 29 21 80 96 38 99
Card 176: 36  3 35 86  6 93 47 25 79 48 | 91 79 11 20 23 25 30 97 90 24 17 50 60 89 96 52 98 88 99 51 48 68 67 82 61
Card 177: 89 81 54 66 51 77 61 11 42 39 | 36 26 40 59 90  8 33 65 11 38 96 79 80  2 13 56 46 86 71 92 72 73 95 39 85
Card 178: 56 34 78 53  2  7 97 88 27 16 | 12  6 97  8 53 17 50 19 21 41 70 86 25 63 84 52 59 78 81 83 85 72 75 71 39
Card 179: 63 98 17 49  6 40 18  8 82 25 | 56 66 49 33 53 59  2 21  6 80 76  4 17  8 62 57 82 55 98 58 93 52 51 22 25
Card 180: 56 80 35 88  2 24 98 66 71 76 | 77 28 86 36 70 85 65 58 15 32 19 56 61 33 27 79 81 35 16 69 55 57 59 45 82
Card 181:  6 31 42 96 19  4 68 28 58 99 | 48 73 97  4 68 42 70 49 39 56 14 67 89 85 81 96 27 16 15  5 94 69 33 11 44
Card 182: 36  8 13 24 90 99 52  1 56 87 | 12 85  1  9 88 30 74 13 26 80 48 72 10 65 91 44 21 37 70  3 93 29 90 61  7
Card 183: 83 30 76 63 77 11 22 33 15 72 | 83 12 60 16 42 31 63 55 99  1 89 93 88 85 47 48 96 97 29 45  7 75 71  8 33
Card 184: 91  4 17 34 61 70 48 64 38 68 | 66 99 94  3 98 44 90 23 14 38 55 56 68 42 87 95 54 13  7 65  5 18 79 62 57
Card 185: 92 81 63 22 41 13 59 79 40 70 | 94 26 80 48 82 50 23  8 93 49 19 24 58  5 43 16 53 61 37 42 44 40 95 67 25
Card 186:  3 65 75 74 68  4 61 28 91 42 | 56 85 83 29 63 11 20 18 66 53 71 62 33 69 30 93 67 47 72 51  7 80 46 44  9
Card 187: 76 60 87 97 68 27 52 20 12 54 | 87  7  8 14 30 19 39 22 65 24 40 34 61 20 64 81 33 25 69 26 52 76 71 11 60
Card 188: 39 87 24 31 93  1 91 18 20 28 | 47 50 84 24 38  7 37 57 91 96 28 10 14 55 76 35  2 45 29 58 79 27 70 23 21
Card 189: 69 77 14 29 62 32 37 57 61  8 | 73 39 51 80 89 32  8 87 81 62 92 21  4 49 79 40 10 96 55 98 69 74 97 72 37
Card 190: 69 46 86 75 59 29 78 72 16 54 | 18 86 68 63  9 49 50 10 19 77 65 69 79 12 24 76 64 58  1 16 30 13 98 11 75
Card 191: 52 35 79 94 34  5 96 38 70 90 | 65 46 49 11 48  1 29 82 24 85 51 61 84 81 18 20 67 41 33 88 89 25  6 83 68
Card 192:  8 66 41 82 36 43 50 97 29  3 |  5 56 32 47 13 82 50  1 39  8 70 20 97 99 33 76  3 46 43 36 26 66 83 61 29
Card 193: 22 70 17 82  6 24  4 35 32 61 | 24 22 67  2 89 35 95  1 34 82 39 14  5 51 27 26  4 32 43 76 45  9 70 17 30
Card 194: 54 90 83 51 22 45 97 41 92 61 | 32 37 94 87 41 21 98 54 40 14  4 79 61 82 97 59 44 45 28 73 66 84 63 35 23
Card 195: 68 89 18 86  4  5 82 78  3 35 | 14 21 75 98 88 28 44 49 20 95 25 68 67 79 65 30 37 87 61 78  8 73 77 31 16
Card 196: 16 64  6 99 67 55 51 50 37 71 | 12 89 81 63 62 82 85 60 76  8  4 32 83 51 38 69 92 35 10 90 58 56 77 99 29
Card 197: 85 67 81 59 28 36 13 84 83 92 | 67 56 68 12 34 30 60 41 58 92 49 81 22 23 21 18  5 69 71 75 94 53 90 36  9
Card 198: 99 10 39  1 13 21 15 84 44 40 | 64 58 40 26  8 97 83 87 86 85 29 54 44 99  6 80 55 36 84 82 18 92 81 35 15
Card 199: 16 74 44 41 37 70 15 20 36  9 | 63 89 93 59 81 76 85 14 92 30 67 71 69 49  7 39 99 97 62 18 55 83 11 79 36
Card 200: 78 75 82 83 61 95  2 56 49 53 | 66 19 77 94 74 97 79 34 33 16 83 41 81 91 52 62 14 21 35  4 99 50 30 42 36
Card 201: 97 48 74 15  5  4 40 64 95 33 | 83 54 73 81 37 53 85 20 68 51 82 41 27 42 60 63 50 58 98 35  9 23 18  2 32
Card 202: 83 90  4 89 57 72 30 13  8 23 | 99 33 38 70 39 12 71 35 46 94 82 79 44 62 98 74 64 16 32 66 65 95 47 58 23
Card 203: 38 61 14 84 65 96 90 69 53 11 | 24 50 66 56 26 25  3 60 95 19 10 21 12 87 92 37 99 76 71 57 17 55 30  6 44`;

const data2 = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const dataArray = data1.trim().split("\n");
const gameObject = {};
const score = [];
const scratchCardsWon = [];
let cardNumberWinningScore = {};

dataArray.map((string) => {
  const numbers = string.match(/([\d\s]+)/gi);
  const game = numbers[0].trim();
  const myNumbers = numbers[1].replaceAll(/\s\s/g, " ").trim();
  const winningNumbers = numbers[2].replaceAll(/\s\s/g, " ").trim();

  gameObject[game] = { myNumbers, winningNumbers };
});

const addWinningScratchCards = (index, numOfScratchCards) => {
  cardNumberWinningScore[index] = numOfScratchCards;
  for (let i = 1; i < numOfScratchCards; i++) {
    scratchCardsWon.push(gameObject[index + i]);
  }
};

for (let i = 1; i <= dataArray.length; i++) {
  const { myNumbers, winningNumbers } = gameObject[i];
  const matchedNumbers = myNumbers
    .split(" ")
    .filter((num) => winningNumbers.split(" ").some((number) => number == num));

  switch (matchedNumbers.length) {
    case 0:
      addWinningScratchCards(i, matchedNumbers.length);
      break;
    default:
      addWinningScratchCards(i, matchedNumbers.length);
      score.push(2 ** (matchedNumbers.length - 1));
  }
}

// part one answer
console.log(score.reduce((calc, sum) => +calc + +sum));

// part two answer
const cards = [];

for (let i = 1; i <= dataArray.length; i++) {
  cards.push({
    card: i,
    matchedNumbers: cardNumberWinningScore[i],
    copies: 1,
  });
}

for (let i = 0; i < cards.length; i++) {
  const { matchedNumbers, copies } = cards[i];
  for (let copy = i + 1; copy <= i + matchedNumbers; copy++) {
    cards[copy].copies = cards[copy].copies + copies;
  }
}

console.log(cards.map((n) => n.copies).reduce((b, n) => b + n));
