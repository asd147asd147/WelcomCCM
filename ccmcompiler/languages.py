import os
class language:
    compile_language = dict()
    c_language ={"compile":
                    {   "src_path" : os.path.abspath('./data/main.c'),
                        "exe_path" : os.path.abspath('./data')+'/main',
                        "max_real_time" : 10000,
                        "max_memory" : 256 * 1024 * 1024,

                        "compile_cmd" : "gcc -o "+os.path.abspath('./data')+'/main'+" "+ os.path.abspath('./data/main.c'),
                        
                    },
                "run":
                    {"command" : os.path.abspath('./data')+'/main'
                    },
                "lang" : "c"
                }

    cpp_language ={"compile":
                    {   "src_path" : os.path.abspath('./data/main_cpp.cpp'),
                        "exe_path" : os.path.abspath('./data')+'/main_cpp',
                        "max_real_time" : 10000,
                        "max_memory" : 256 * 1024 * 1024,
                        "compile_cmd" : "g++ -o "+os.path.abspath('./data')+'/main_cpp'+" "+ os.path.abspath('./data/main_cpp.cpp'),
                    },
                "run":
                    {"command" : os.path.abspath('./data')+'/main_cpp' 
                    },
                "lang" : "cpp"
                }

    py3_language = {"compile" :
                        {
                            "src_path" : os.path.abspath('./data/user.py'),
                            "exe_path" : os.path.abspath('./data')+'/user.pyc',
                            "max_real_time": 10000,
                            "max_memory": 128 * 1024 * 1024,
                            "compile_cmd" : "python "+ os.path.abspath('./data/user.py')
                        }
                    ,
                    "run":
                        {
                            "command" : "python "+ os.path.abspath('./__pycache__/')+" "+ '/user.cpython-37.pyc',
                        },
                    "lang" : "python"    
                    }

    def __init__(self, select):
        if(select == "python"):
            self.compile_language = self.py3_language
        elif(select == "c"):
            self.compile_language = self.c_language
        elif(select == "cpp"):
            self.compile_language = self.cpp_language

