import os
class language:
    compile_language = dict()
    def __init__(self, select,user):
        c_language ={"compile":
                        {   "src_path" : os.path.abspath('./'+ user + '/main.c'),
                            "exe_path" : os.path.abspath('./'+user)+'/main',
                            "max_real_time" : 10000,
                            "max_memory" : 256 * 1024 * 1024,

                            "compile_cmd" : "gcc -o "+os.path.abspath('./'+user)+'/main'+" "+ os.path.abspath('./'+ user +'/main.c'),
                            
                        },
                    "run":
                        {"command" : os.path.abspath('./'+user)+'/main'
                        },
                    "lang" : "c"
                    }

        cpp_language ={"compile":
                        {   "src_path" : os.path.abspath('./'+user+'/main.cpp'),
                            "exe_path" : os.path.abspath('./'+user)+'/main',
                            "max_real_time" : 10000,
                            "max_memory" : 256 * 1024 * 1024,
                            "compile_cmd" : "g++ -o "+os.path.abspath('./'+user)+'/main'+" "+ os.path.abspath('./'+user+'/main.cpp'),
                        },
                    "run":
                        {"command" : os.path.abspath('./'+user)+'/main' 
                        },
                    "lang" : "cpp"
                    }

        py3_language = {"compile" :
                            {
                                "src_path" : os.path.abspath('./'+user+'/main.py'),
                                "exe_path" : os.path.abspath('./data')+'/user.pyc',
                                "max_real_time": 10000,
                                "max_memory": 128 * 1024 * 1024,
                                "compile_cmd" : "python "+ './'+user+'/main.py'
                            }
                        ,
                        "run":
                            {
                                "command" : "python "+ os.path.abspath('./__pycache__/')+" "+ '/user.cpython-37.pyc',
                            },
                        "lang" : "python"    
                        }

        if(select == "python"):
            self.compile_language = py3_language
        elif(select == "c"):
            self.compile_language = c_language
        elif(select == "cpp"):
            self.compile_language = cpp_language

