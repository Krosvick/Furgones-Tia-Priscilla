import { Container } from "~/app/_components/Container";
import { Card } from "~/app/_components/Card";
import Link from "next/link";
import { api } from "~/trpc/server";
import { Divider } from "@nextui-org/react";

export default async function ContratosIndex(){
    const contratos = await api.contratos.getAll.query();
    return (
        <section className="w-full">
            <Container bgColor="bg-gray-100" className="rounded-3xl bg-opacity-50">
                <div className="w-full h-screen">
                    <Card
                        title="Contratos"
                        description="Aqui se pueden ver todos los contratos"
                        dark={false}
                        headElements={[
                        <Link href="/admin/contratos/crear"><button className="btn btn-neutral">Crear Contrato</button></Link>
                    ]}
                    >
                    </Card>
                    <div className="mt-5">
                    {contratos && contratos.map((contrato) => (
                        <div className="p-6 bg-slate-100 border border-gray-200 rounded-lg shadow mb-4" key={contrato.idContrato}>
                            <h1 className="text-2xl font-bold mb-2">Nombre del contrato: {contrato.nombre}</h1>
                            <Divider className="my-4"/>
                            <p className="font-bold text-lg mb-1">Descripción:</p>
                            <p className="mb-2">{contrato.descripcion}</p>
                            <p className="font-bold text-lg mb-1">Fecha de inicio:</p>
                            <p className="mb-2">{contrato.fechaInicio.toLocaleDateString()}</p>
                            <p className="font-bold text-lg mb-1">Fecha de termino:</p>
                            <p className="mb-2">{contrato.fechaTermino?.toLocaleDateString()}</p>
                            <p className="font-bold text-lg mb-1">Apoderado:</p>
                            <p className="mb-2">{contrato.Apoderado?.nombre} {contrato.Apoderado?.apellido}</p>
                            <p className="font-bold text-lg mb-1">Rut:</p>
                            <p className="mb-2">{contrato.Apoderado?.rut}</p>
                            <Link href={`/admin/contratos/${contrato.idContrato}`} className="mt-5">
                                <button className="btn btn-neutral">Ver Contrato</button>
                            </Link>
                        </div>
                    ))    
                    }
                    </div>
                </div>
            </Container>
        </section>
    );
}