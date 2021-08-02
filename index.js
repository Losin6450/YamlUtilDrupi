"use strict";

class YamlUtil {

  constructor(){}

  static getData(file){
    const Yaml = Java.type('org.yaml.snakeyaml.Yaml');
    const IOFile = Java.type('java.io.File');
    const FileInputStream = Java.type('java.io.FileInputStream');
    var yaml = new Yaml();
    return yaml.load(new FileInputStream(new IOFile(file)));
  }

  static getPath() {
    const IOFile = Java.type('java.io.File');
    return new IOFile("").getAbsoluteFile().getAbsolutePath();
  }

  static dump(file, data){
    const Yaml = Java.type('org.yaml.snakeyaml.Yaml');
    const IOFile = Java.type('java.io.File');
    const PrintWriter = Java.type('java.io.PrintWriter');
    const DumperOptions = Java.type('org.yaml.snakeyaml.DumperOptions');
    var options = new DumperOptions();
    options.setIndent(4);
    options.setPrettyFlow(true);
    options.setDefaultFlowStyle(DumperOptions.FlowStyle.BLOCK);
    var yaml = new Yaml(options);
    var writer = new PrintWriter(new IOFile(file));
    yaml.dump(data, writer);
  }

  static 
}

module.exports = {
  YamlUtil
}