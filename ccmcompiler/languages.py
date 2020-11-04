import os
class language:
    compile_language = dict()
    c_language ={"compile":
                    {   "src_path" : os.path.abspath('./data/main.c'),
                        "exe_path" : os.path.abspath('./data')+'/main',
                        "max_real_time" : 10000,
                        "max_memory" : 256 * 1024 * 1024,
                        "compile_cmd" : "gcc",
                        "arg1" : "-o {exe_path} {src_path}"
                    },
                "run":
                    {"command" : "{exe_path}" 
                    }
                }

    cpp_language ={"compile":
                    {   "src_path" : os.path.abspath('./data/main.cpp'),
                        "exe_path" : os.path.abspath('./data')+'/main',
                        "max_real_time" : 10000,
                        "max_memory" : 256 * 1024 * 1024,
                        "compile_cmd" : "g++",
                        "arg1" : "-o {exe_path} {src_path}"
                    },
                "run":
                    {"command" : "{exe_path}" 
                    }
                }

    py3_language = {"compile" :
                        {
                            "src_path" : os.path.abspath('./data/user.py'),
                            "exe_path" : os.path.abspath('./data')+'/user.pyc',
                            "max_real_time": 10000,
                            "max_memory": 128 * 1024 * 1024,
                            "compile_cmd" : "python",
                            "arg1" : "-m {src_path}"
                        }
                    ,
                    "run":
                        {
                            "command" : "python",
                            "arg1" : "{exe_path}"
                        }
                    }
    def __init__(self, select):
        if(select == "python"):
            self.compile_language = self.py3_language
        elif(select == "c"):
            self.compile_language = self.c_language
        elif(select == "cpp"):
            self.compile_language = self.cpp_language