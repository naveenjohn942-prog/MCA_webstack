<<<<<<< HEAD
import xmlschema

# Load the XSD schema
schema = xmlschema.XMLSchema('employee_schema.xsd')

# Load and validate the XML file
try:
    xml_file = 'employee.xml'
    schema.validate(xml_file)
    print("XML file is valid according to the schema.")
except xmlschema.XMLSchemaValidationError as e:
    print("XML file is not valid according to the schema:")
    print(e)
=======
import xmlschema

# Load the XSD schema
schema = xmlschema.XMLSchema('employee_schema.xsd')

# Load and validate the XML file
try:
    xml_file = 'employee.xml'
    schema.validate(xml_file)
    print("XML file is valid according to the schema.")
except xmlschema.XMLSchemaValidationError as e:
    print("XML file is not valid according to the schema:")
    print(e)
>>>>>>> 1f526932f577f3f74a1a01bc3f96495426a03998
